import React from 'react';

const ReviewForm = () => {
    return (
        <div className="card card-body review-card">
            <h2>Give a valuable feedback</h2>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm;
