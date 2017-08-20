import React, {Component} from 'react';
import { Table } from 'reactstrap';

class HelloWorld extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            sampleList : []
        }
    }
    
    componentDidMount() 
    {
        if (this.props.sampleListAPI != null)
        {
            let self = this;
            this.props.sampleListAPI(this.props.maxItems)
                      .then(function (response) 
                        {
                            self.setState({ sampleList : response.data })
                        })
                        .catch(function (error) 
                        {
                            console.log(error);
                        }); 
        }
    }

    renderAsTable()
    {
        let displaySampleList = this.state.sampleList.map((elem,index) => { return (<tr> <th scope="row">{index}</th> <td> {elem.Id} </td> <td> {elem.Name} </td> </tr>); } );
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
            <tbody>
                {displaySampleList}
            </tbody>
            </Table>
          );
    }

    renderAsList()
    {
        let displaySampleList = this.state.sampleList.map((elem) => { return (<li> {elem.Name} </li>); } );
        return (
              <ul>
                  {displaySampleList}
              </ul>
          );
    }
    
    render() 
    {
        let displaySampleList = this.state.sampleList.map((elem) => { return (<li> {elem.Name} </li>); } );

        if (this.state.sampleList.length <= 0)
        {
            return ( <h2> Please wait till we get the data </h2> );
        }
        else
        {
           return ( <div>  { (this.props.displayAs=='table') ? this.renderAsTable() : this.renderAsList() } </div>);
        }
    }
}

export default HelloWorld;