import React, {Component} from 'react';
import { fetchFundDetails } from '../../services';
import FundDetails from './FundDetails';
import Loader from '../common/Loader/Loader';
class DetailsPage extends Component {
   constructor(props){
       super(props);
       this.state={
           loading: false,
           fundDetails: {},
           error: false
       }
   }
   componentDidMount(){
    const { match: { params } } = this.props;
       this.setState({loading: true});
       fetchFundDetails(params.code).then(details => details.json()).then(details => {
           this.setState({fundDetails : details[0], loading: false})
       }).catch(err => this.setState({error: err.message}))
   }
   render(){
       const {loading, fundDetails, error} =  this.state;
       if(error){
           return <div>Unable to Find What you are looking for</div>
       } 
       if (loading){
           return <Loader />
       } 
       if(Object.keys(fundDetails).length){
           return <FundDetails details={fundDetails} />
       }
       return null;
   }
}

export default DetailsPage;