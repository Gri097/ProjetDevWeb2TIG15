import React, {Component, Fragment} from "react";
import './PointBioDetails.css';

class PointBioDetails extends Component {
    state = {
        loading : true,
        allFamily : [],
        routes : [],
        family : '',
        route: '',
        information : ['Nom', 'Famille','Parcours','Numéro du parcours','Visible sur la carte']
    }

    getName = () => {
        if(this.props.nomFranc === "" || this.props.nomFranc === " " ){
            return 'Inconnu'
        }else {
            return this.props.nomFranc
        }
    };
    getVisible = () => {
        if(this.props.remarquable){
            return <p className="item" style={{color:'#006400'}}> Oui </p>
        }else {
            return <p className="item" style={{color:'#8B0000'}}> Non </p>
        }

    }

    async componentDidMount(){
        const urlFamily = 'http://localhost:8000/api/famille/?format=json';
        const urlRoute = 'http://localhost:8000/api/parcours/?format=json';

        const responseFamily = await fetch(urlFamily);
        const responseRoute = await fetch(urlRoute);

        const dataFamily = await responseFamily.json();
        const dataRoute = await responseRoute.json();

        this.state.allFamily = dataFamily;
        this.state.routes = dataRoute;

        const routeObject = this.props.parcours;
        const routeName = this.state.routes[routeObject -1].nom;
        this.setState({route: routeName, loading:false});

        const familyObject = this.props.famille;
        if(familyObject === null){
            this.setState({family: 'Inconnu'})
        }
        else{
            const familyName = this.state.allFamily[familyObject -1].nom;
            this.setState({family: familyName})
        }
    }

    render() {
        return (
            <div className="content">

                <h2 className='title' >{this.props.id}. Détail sur : {this.props.nomScien}</h2>
                {this.state.loading ?
                    (<div> Loading .. </div>) :

                    (<div className="block">
                        <div className="category">
                            <p className="information">{this.state.information[0]} :</p>
                            <p className="information">{this.state.information[1]} :</p>
                            <p className="information">{this.state.information[2]} :</p>
                            <p className="information">{this.state.information[3]} :</p>
                            <p className="information">{this.state.information[4]} :</p>
                        </div>

                        <div className="detail">
                            <p className="item">{this.getName()} </p>
                            <p className="item">{this.state.family}</p>
                            <p className="item">{this.state.route}</p>
                            <p className="item">{this.props.numParcours}</p>
                            {this.getVisible()}
                        </div>
                    </div>
                    )}
            </div>
        )
    }
}

export default PointBioDetails;