import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const UpdateReview = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const { review: myReview } = useSelector(state => state.myReview)


    useEffect(() => {
        setName(myReview.name)
        setEmail(myReview.email)
        setDescription(myReview.description)
    }, [myReview])

    return (
        <div className="card card-body review-card">
            <h2>feedback</h2>
            <form >
                <div className="form-group">
                    <input
                        name='name'
                        type="text"
                        defaultValue={name}
                        className="form-control"
                        placeholder="Your name / Company's name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input name='email' type="email" defaultValue={email} className="form-control" placeholder="Your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name='review_text'
                        className="form-control"
                        placeholder='Description' rows="4"
                        defaultValue={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-grad">Update Review</button>
                <button type="submit" className="btn-grad">Delete Review</button>
            </form>
        </div>
    );
}

export default UpdateReview;
