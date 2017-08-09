import Book from './Book';
const React = require('react');
const BookList = (props) => {
    return (
        <div>
            <Book />
            <Book />
            <Book />
        </div>
    );
};

export default BookList;
