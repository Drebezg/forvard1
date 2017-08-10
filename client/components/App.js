import BookList from './BookList';
import axios from 'axios';
const React = require('react');
class App extends React.Component {
    state = {books: this.props.initialData};
    componentDidMount() {
        //ajax
        // axios.get('http://localhost:3000/api/books')
        //     .then(resp => {
        //         this.setState({books: resp.data});
        //     });
    }
    render() {
        return (
            <BookList books={this.state.books} />
        );
    }
}
export default App;
