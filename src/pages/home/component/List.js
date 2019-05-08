import React from 'react';
import { ListItem } from '../style';
import { connect } from 'react-redux';
import { getMoreList } from '../store/actionCreators';
import { Link } from 'react-router-dom'
class List extends React.Component{
    render(){
        console.log(this.props.listItem)
        const list = this.props.listItem.map((item,index)=>(
              <Link key={index} to={'/detail/' + item.get('id')}>
                <li className="have-img"  >
                    <div className="wrap-img" target="_blank">
                        <img className="img-blur-done" src={item.get('imgUrl')} alt="120" />
                    </div>
                    <div className="content">
                        <div className="title" target="_blank">{item.get('title')}</div>
                        <p className="abstract">
                        {item.get('abstract')}
                        </p>
                    </div>
                </li>
            </Link>
    ))
        return(
            <ListItem>
                {list}
                <div className="learnmore" onClick={()=>this.props.getMoreList(this.props.page)}>更多文字</div>
            </ListItem>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        listItem:state.getIn(['home','listItem']),
        page:state.getIn(['home','listItempage'])
    }
}
const mapDispatchToProps = (dispatch) =>({
    getMoreList(page){
        dispatch(getMoreList(page))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);