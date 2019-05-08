import React from 'react';
import { DetailWraper,Header,Content } from './style';
import { connect } from 'react-redux';
import { getDetailData } from './store/actionCreators';
import { withRouter } from 'react-router-dom'
class Detail extends React.Component{
    componentDidMount(){
        this.props.getDetailData(this.props.match.params.id);
    }
    render(){
        console.log(this.props)
        return(
            <DetailWraper>
                <Header>{this.props.title} </Header>
                <Content dangerouslySetInnerHTML = {{ __html: this.props.content }} />
            </DetailWraper>
        )
    }
}
const mapStateToProps =(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapDispatchToProps = (dispatch) => ({
    getDetailData(id){
        dispatch(getDetailData(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));