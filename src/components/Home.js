import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import styles from './layout.css';
import FriendsList from './FriendsList';

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clicks : 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState( (state,props) => ({
      clicks : state.clicks+1
    }));
  }

  handleClick2 = () => {
    this.setState( (state,props) => ({
      clicks : state.clicks+1
    }));
  }
  render() {
    return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button onClick={this.handleClick2}>{this.state.clicks}</Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns>
          <Grid.Column textAlign="center">
            { this.state.clicks % 2 === 0 && <FriendsList id = "1" show={true} /> }
          </Grid.Column>
          
        </Grid.Row>

        <Grid.Row>
          <Grid.Column textAlign="center">
              { <FriendsList id = "2" show={this.state.clicks % 2 == 0} /> }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column textAlign="center">
            <h1 className={styles.name}> Sample User</h1>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} >
          <Grid.Column mobile={16} tablet={8} computer={4} >
            <h1 className={styles.columnTitle}> Friends</h1>
            <h4 className={styles.columnVal}> 200 </h4>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4} >
            <h1 className={styles.columnTitle}> Location</h1>
            <h4 className={styles.columnVal}> San Fransico </h4>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h1 className={styles.columnTitle}> Title</h1>
            <h4 className={styles.columnVal}> Software Engineer </h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
