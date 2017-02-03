import React from 'react';
import blogs from '../sites';
import date from '../utils/date.js';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedText: '',
    };
    this.clickFilter = this.clickFilter.bind(this);
  }

  componentWillMount() {
    blogs.map( blog => {
      this.props.fetchRSS(blog);
    });
  }

  clickFilter(text) {
    this.setState({
      clickedText: text
    });
  }

  render() {
    return (
      <div id="cards">
        <div id="filters">
          <Filter onClick={this.clickFilter.bind(this, '')} text="Wszystko"/>
          <Filter onClick={this.clickFilter.bind(this, 'biznes')} text="Biznes"/>
          <Filter onClick={this.clickFilter.bind(this, 'algorytmy')} text="Algorytmy"/>
          <Filter onClick={this.clickFilter.bind(this, '')} text="3"/>
          <Filter onClick={this.clickFilter.bind(this, '')} text="4"/>
        </div>
        <div id="filters">
          <Filter onClick={this.clickFilter.bind(this, 'javascript')} text="Javascript"/>
          <Filter onClick={this.clickFilter.bind(this, 'frontend')} text="Frontend"/>
          <Filter onClick={this.clickFilter.bind(this, 'c#')} text="C#"/>
          <Filter onClick={this.clickFilter.bind(this, 'ruby')} text="Ruby"/>
          <Filter onClick={this.clickFilter.bind(this, 'daj się poznać')} text="Daj się poznać"/>
        </div>
        <CardsList cards={this.props.cards} clickedText={this.state.clickedText}/>
      </div>
    );
  }
}

const Filter = (props) => (
  <button onClick={() => {props.onClick();}}>{props.text}</button>
);


class CardsList extends React.Component {

  render() {
    var rows = [];
    this.props.cards.map( (post, index) => {
      if(post.tags.indexOf(this.props.clickedText) !== -1 || this.props.clickedText === '') {
        rows.push(post);
      }
    });
    rows.sort((a, b)=>{return  b.date - a.date});
    return (
      <div>{rows.map((post, index) => {
        return (
          <Card
            key={index}
            title={post.title}
            author={post.author}
            description={post.description}
            link={post.link}
            date={date.getTimeDiff(post.date)}
            photo={post.photo}
            />);
      })}</div>
    );
  }

}

const Card = (props) => (
  <div className="card">
    <a href={props.link}>
      <div className="image">
        <img src={props.photo} />
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
