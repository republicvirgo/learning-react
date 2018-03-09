var TodoForm = React.createClass({
    render: function () {
        return (
            <div className="todoForm">
                <label htmlFor="todoInput">
                    Tambahkan Data:
                </label>
                <input type="text" id="todoInput" className="inputForm" />
            </div>
        );
    }
});

React.render(
    <TodoForm />,
    document.getElementById("content")
);