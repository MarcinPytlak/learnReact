import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>Mogę zrobić wszystkie te rzeczy!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} 
        imageSource={this.props.image} />
        <div className={styles.description}>
        {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Zwierzęta'/>
          <Column title='Rośliny'/>
          <Column title='Minerały'/>
        </div>
      </section>
    )
  }
}

export default List;
