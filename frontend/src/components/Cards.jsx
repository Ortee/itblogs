import React from 'react';
import links from '../sites';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    links.map( link => {
      this.props.fetchRSS(link);
    });
  }

  render() {
    return (
      <div id="cards">
      {this.props.cards.map((post, index) => {
        return (
          <Card
            key={index}
            title={post.title}
            author={post.author}
            description={post.description}
            link={post.link}
            date={post.date}
            />);
      })}
      </div>
    );
  }
}

const Card = (props) => (
  <div className="card">
    <a href={props.link}>
      <div className="image">
        <img src="http://downloadicons.net/sites/default/files/messages-icon-64932.png" />
      </div>
      <div className="description">
        <span className="author">{props.author}</span>
        <span className="title">{props.title}</span>
        <span className="time">
          {'Dodano ' + props.date.time + ' ' +
            (props.date.type === 0 ? 'minut' : (props.date.type === 1 ? 'godzin' : 'dni'))
          + ' temu.'}
        </span>
        <span className="smallDescription">{props.description}</span>
      </div>
    </a>
  </div>
);

export default Cards;
