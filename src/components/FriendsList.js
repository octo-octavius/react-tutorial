import React from 'react';
import { Icon, List } from 'semantic-ui-react';
import styles from './layout.css';

class FriendsList extends React.Component {

    constructor(props) {
        super(props);
        console.log("this component is created " + this.props.id)
    }
    componentDidMount() {
        console.log("this component is mounted " + this.props.id)
    }
    componentWillUnmount() {
        console.log("this component will be unmounted " + this.props.id)
    }
    render(){
        let list = [ "Susan" , "Rose" ,"Monisha", "Rachet"];
        if(!this.props.show){
            return null;
        }

        return (
            <List>
                {
                    list.map( (item, index) => (
                        <List.Item className = {styles.friendsList} key={index}>
                            <Icon name='male' />
                            <List.Content> 
                                {item}
                            </List.Content>
                        </List.Item>  
                    ))
                }
            </List>
        )
    }
}

FriendsList.defaultProps = {
    id : "1",
    show: true
}
export default FriendsList;