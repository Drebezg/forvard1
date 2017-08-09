import BookList from './BookList';

class App extends React.Component {
    state = {answer: 55};
    render() {
        return (
            <BookList />
        );
    }
}
export default App;
