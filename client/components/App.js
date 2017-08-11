import BookList from './BookList';
import axios from 'axios';
const React = require('react');

class App extends React.Component {
    state = {
        books: this.props.initialData,
        ratings: {}
    };
    fetchRatingForBook = (bookId) => {
        axios.get(`http://localhost:3000/api/books/${bookId}/ratings`)
            .then(resp => {
                console.log(resp.data);
            });
    };
    render() {
        return (
            <BookList books={this.state.books}
                onBookClick={this.fetchRatingForBook}
            />
        );
    }
}
export default App;
