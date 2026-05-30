import { Link, useParams } from 'react-router-dom'
import './Details.css'

const Details = ({ products }) => {
    const { productId } = useParams()
    const product = products.find((item) => item.id === Number(productId))

    if (!product) {
        return (
            <div className="details-page">
                <div className="details-empty">
                    <h1>Product not found</h1>
                    <Link className="back-link" to="/">Back to products</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="details-page">
            <div className="details-container">
                <Link className="back-link" to="/">Back to products</Link>

                <header className="details-header">
                    <div className="product-image-box">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>

                    <div className="product-summary">
                        <div className="summary-topline">
                            <span>{product.category}</span>
                            <span>{product.availabilityStatus}</span>
                        </div>

                        <h1>{product.title}</h1>
                        <p className="product-description">{product.description}</p>

                        <div className="summary-metrics">
                            <div>
                                <strong>${product.price.toFixed(2)}</strong>
                                <span>Price</span>
                            </div>
                            <div>
                                <strong>{product.rating}</strong>
                                <span>Rating</span>
                            </div>
                            <div>
                                <strong>{product.stock}</strong>
                                <span>Stock</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="details-grid">
                    <section className="detail-panel">
                        <h2>Product Details</h2>
                        <dl>
                            <div>
                                <dt>Brand</dt>
                                <dd>{product.brand}</dd>
                            </div>
                            <div>
                                <dt>SKU</dt>
                                <dd>{product.sku}</dd>
                            </div>
                            <div>
                                <dt>Category</dt>
                                <dd>{product.category}</dd>
                            </div>
                            <div>
                                <dt>Discount</dt>
                                <dd>{product.discountPercentage}%</dd>
                            </div>
                            <div>
                                <dt>Minimum order</dt>
                                <dd>{product.minimumOrderQuantity}</dd>
                            </div>
                        </dl>
                    </section>

                    <section className="detail-panel">
                        <h2>Shipping and Warranty</h2>
                        <dl>
                            <div>
                                <dt>Shipping</dt>
                                <dd>{product.shippingInformation}</dd>
                            </div>
                            <div>
                                <dt>Warranty</dt>
                                <dd>{product.warrantyInformation}</dd>
                            </div>
                            <div>
                                <dt>Returns</dt>
                                <dd>{product.returnPolicy}</dd>
                            </div>
                        </dl>
                    </section>

                    <section className="detail-panel">
                        <h2>Dimensions</h2>
                        <dl>
                            <div>
                                <dt>Weight</dt>
                                <dd>{product.weight}</dd>
                            </div>
                            <div>
                                <dt>Width</dt>
                                <dd>{product.dimensions.width}</dd>
                            </div>
                            <div>
                                <dt>Height</dt>
                                <dd>{product.dimensions.height}</dd>
                            </div>
                            <div>
                                <dt>Depth</dt>
                                <dd>{product.dimensions.depth}</dd>
                            </div>
                        </dl>
                    </section>

                    <section className="detail-panel">
                        <h2>Tags</h2>
                        <div className="tag-list">
                            {product.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="reviews-panel">
                    <h2>Reviews</h2>
                    <div className="reviews-list">
                        {product.reviews.map((review, index) => (
                            <article key={`${review.reviewerEmail}-${index}`}>
                                <div className="review-heading">
                                    <h3>{review.reviewerName}</h3>
                                    <span>{review.rating}/5</span>
                                </div>
                                <p>{review.comment}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Details
