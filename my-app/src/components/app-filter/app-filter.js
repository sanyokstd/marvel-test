import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props){
        super(props)
        this.state={
            type: this.props.filterType
        }
    }

    onFilter = (type) =>{
        this.setState({type})
        this.props.filterUpdateType(type)
    }

    render(){
        const classNamesDefault = 'btn btn-outline-light';
        const classNamesActive = 'btn btn-light';

        return (
            <div className="btn-group">
                <button type="button"
                        onClick={() => this.onFilter('all')}
                        className={this.state.type === 'all' ? classNamesActive : classNamesDefault}>
                        Все сотрудники
                </button>
                <button type="button"
                        onClick={() => this.onFilter('rise')}
                        className={this.state.type === 'rise' ? classNamesActive : classNamesDefault}>
                        На повышение
                </button>
                <button type="button"
                        onClick={() => this.onFilter('salary')}
                        className={this.state.type === 'salary' ? classNamesActive : classNamesDefault}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;