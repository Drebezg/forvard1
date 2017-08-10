import BookList from './BookList';
import axios from 'axios';
const React = require('react');
class App extends React.Component {
    state = {books: this.props.initialData};
    render() {
        return (
            <BookList books={this.state.books} />
        );
    }
}
export default App;
