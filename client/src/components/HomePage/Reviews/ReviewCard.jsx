
const ReviewCard = ({ review }) => {

    const reviewStyle = {
        fontSize: '22px',
        color: "#ffffff",
        backgroundColor: '#009432',
        padding: '20px',
        borderRadius: '50%',
        marginRight: '10px',
    }

    console.log(review.image)

    return (
        <div className='col-md-4 col-sm-12'>
            <div className="card mt-5 mb-5 p-1 text-center" >
                <div className="d-flex align-items-center pt-3 pl-3">
                    {review.img ?
                        <img style={{ width: '50px', height: '40px', borderRadius: '50%' }} className='mr-3 card-img' src={review.image} alt="clientPic" />
                        :
                        <h1 style={reviewStyle}>{review.name.slice(0, 1)}</h1>
                    }

                    <div>
                        <h5 className='font-weight-bold'>{review.name}</h5>
                    </div>
                </div>
                <div className="pb-0 card_over card-body">
                    <p className=''>
                        {
                            review.description.length < 100 ? review.description :
                                review.description.slice(0, 100) + "..."
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;