import * as React from 'react';
import { connect } from 'react-redux';
import { StoreType } from '../../store/reducer';
import { CHANGE__NAME } from '../../store/types';

interface Props{
    path:string, 
    name: string,
    handleChangeName:  () => void
}
interface State{
    num: number
}

const mapStateToProps = ({name}: StoreType) => {
    return {
        name
    }
}
const MapDispatchToProps = (dispatch:any) => {
    return {
        handleChangeName: () => {
            dispatch({type: CHANGE__NAME, name:'name is changed'})
        }
    }
}
class Home extends React.Component<Props, State>{
    constructor (props:Props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    handleClick = ():void => {
        this.setState({
            num : this.state.num +1 
        })
    }
    handleChangeName = () :void => {
        this.props.handleChangeName();
    } 
    render () {
        const { path, name } = this.props;
        const { num } = this.state;
        return (
            <div>
                <div>now is {path}, num: is {num} </div>
                <div onClick={this.handleClick}>
                    click
                </div>
                <div>
                    store {this.props.name}
                </div>
                <div onClick={this.handleChangeName}>
                    change name {this.props.name}
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, MapDispatchToProps)(Home);