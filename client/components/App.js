import BookList from './BookList';
const React = require('react');
class App extends React.Component {
    state = {answer: 55};
    render() {
        return (
            <BookList />
        );
    }
}
export default App;
