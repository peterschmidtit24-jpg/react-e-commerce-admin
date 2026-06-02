import { useState } from 'react'
import './NewProduct.css'

const emptyForm = {
    title: '',
    brand: '',
    sku: '',
    category: '',
    price: '',
    stock: '',
    thumbnail: '',
    description: '',
    availabilityStatus: 'In Stock',
    discountPercentage: '',
    rating: '',
    minimumOrderQuantity: '',
    shippingInformation: '',
    warrantyInformation: '',
    returnPolicy: '',
    tags: '',
}

const productToForm = (product) => ({
    title: product.title,
    brand: product.brand,
    sku: product.sku,
    category: product.category,
    price: product.price,
    stock: product.stock,
    thumbnail: product.thumbnail,
    description: product.description,
    availabilityStatus: product.availabilityStatus,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    minimumOrderQuantity: product.minimumOrderQuantity,
    shippingInformation: product.shippingInformation,
    warrantyInformation: product.warrantyInformation,
    returnPolicy: product.returnPolicy,
    tags: product.tags.join(', '),
})

// Converts the flat form fields back into the product shape used by the list/details pages.
const createProductFromForm = (form, existingProduct = null) => {
    const imageUrl = form.thumbnail.trim() || '/vite.svg'
    const tags = form.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)

    return {
        ...existingProduct,
        title: form.title.trim(),
        brand: form.brand.trim(),
        sku: form.sku.trim(),
        category: form.category.trim(),
        price: Number(form.price),
        stock: Number(form.stock),
        thumbnail: imageUrl,
        description: form.description.trim(),
        availabilityStatus: form.availabilityStatus,
        discountPercentage: Number(form.discountPercentage) || 0,
        rating: Number(form.rating) || 0,
        minimumOrderQuantity: Number(form.minimumOrderQuantity) || 1,
        shippingInformation: form.shippingInformation.trim(),
        warrantyInformation: form.warrantyInformation.trim(),
        returnPolicy: form.returnPolicy.trim(),
        tags,
        images: [imageUrl],
        weight: existingProduct?.weight || 0,
        dimensions: existingProduct?.dimensions || {
            width: 0,
            height: 0,
            depth: 0,
        },
        reviews: existingProduct?.reviews || [],
        meta: existingProduct?.meta || {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            barcode: '',
            qrCode: '',
        },
    }
}

const NewProduct = ({ productToEdit, onAddProduct, onCancelEdit, onUpdateProduct }) => {
    // The key on <NewProduct> in DashBoard remounts this component for create vs edit mode.
    const [form, setForm] = useState(() =>
        productToEdit ? productToForm(productToEdit) : emptyForm
    )
    const isEditing = Boolean(productToEdit)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const product = createProductFromForm(form, productToEdit)

        if (isEditing) {
            onUpdateProduct(product)
            return
        }

        onAddProduct(product)
        setForm(emptyForm)
    }

    const handleCancel = () => {
        onCancelEdit()
        setForm(emptyForm)
    }

    return (
        <form className="new-product-form" onSubmit={handleSubmit}>
            <div className="form-heading">
                <div>
                    <h2>{isEditing ? 'Update Product' : 'Create Product'}</h2>
                    <p>
                        {isEditing
                            ? 'Edit the selected product and save the changes.'
                            : 'Add a new product to the dashboard list.'}
                    </p>
                </div>

                <button className="secondary-button" type="button" onClick={handleCancel}>
                    {isEditing ? 'Cancel edit' : 'Close form'}
                </button>
            </div>

            <div className="form-grid">
                <label>
                    Title
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Brand
                    <input
                        name="brand"
                        value={form.brand}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    SKU
                    <input
                        name="sku"
                        value={form.sku}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Category
                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Price
                    <input
                        min="0"
                        name="price"
                        step="0.01"
                        type="number"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Stock
                    <input
                        min="0"
                        name="stock"
                        type="number"
                        value={form.stock}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Availability
                    <select
                        name="availabilityStatus"
                        value={form.availabilityStatus}
                        onChange={handleChange}
                    >
                        <option>In Stock</option>
                        <option>Low Stock</option>
                        <option>Out of Stock</option>
                    </select>
                </label>

                <label>
                    Rating
                    <input
                        max="5"
                        min="0"
                        name="rating"
                        step="0.01"
                        type="number"
                        value={form.rating}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Discount %
                    <input
                        min="0"
                        name="discountPercentage"
                        step="0.01"
                        type="number"
                        value={form.discountPercentage}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Minimum order
                    <input
                        min="1"
                        name="minimumOrderQuantity"
                        type="number"
                        value={form.minimumOrderQuantity}
                        onChange={handleChange}
                    />
                </label>

                <label className="wide-field">
                    Image URL
                    <input
                        name="thumbnail"
                        value={form.thumbnail}
                        onChange={handleChange}
                    />
                </label>

                <label className="wide-field">
                    Tags
                    <input
                        name="tags"
                        placeholder="beauty, mascara"
                        value={form.tags}
                        onChange={handleChange}
                    />
                </label>

                <label className="wide-field">
                    Description
                    <textarea
                        name="description"
                        rows="3"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Shipping
                    <input
                        name="shippingInformation"
                        value={form.shippingInformation}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Warranty
                    <input
                        name="warrantyInformation"
                        value={form.warrantyInformation}
                        onChange={handleChange}
                    />
                </label>

                <label className="wide-field">
                    Return policy
                    <input
                        name="returnPolicy"
                        value={form.returnPolicy}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="form-actions">
                <button type="submit">
                    {isEditing ? 'Update product' : 'Add product'}
                </button>
            </div>
        </form>
    )
}

export default NewProduct
