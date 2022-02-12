import React from "react";
import UserService from "../services/UserService";

class PollComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polls: []
        }
    }
    componentDidMount() {
        UserService.getPolls().then((response) => {
            this.setState({ polls: response.data })
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Polls List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Poll ID</td>
                            <td>Poll name</td>
                            <td>Poll created By</td>
                            <td>Question</td>
                            <td>Option1</td>
                            <td>Option2</td>
                            <td>Category</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.polls.map(
                                poll =>
                                <tr key = {poll.pollid}>
                                    <td>{poll.pollid}</td>
                                    <td>{poll.pollname}</td>
                                    <td>{poll.pollcreateby}</td>
                                    <td>{poll.question}</td>
                                    <td>{poll.option1}</td>
                                    <td>{poll.option2}</td>
                                    <td>{poll.category}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PollComponent;