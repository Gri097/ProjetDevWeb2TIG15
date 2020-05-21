import React, {Fragment, Component} from "react";
import { Tab, Tabs } from 'react-mdl';
import PointBio from "./PointBio";
import './PointBio.css';
import logoVert from '../../images/logo-vert.png';
import logoRouge from '../../images/logo-rouge.png';


const utile = <div style={{textAlign:'center'}}>
                <img src={logoVert} alt="Logo-vert" style={{width:'30px'}}/>
                <p style={{display:'inline-block', color:'#808000',marginRight:'10px'}}>Disponible</p>
                <img src={logoRouge} alt="Logo-Rouge" style={{width:'30px'}}/>
                <p style={{display:'inline-block', color:'#bd2130'}}>Indisponible</p>
            </div>

class PointsBios extends Component{

    state = {
        loading : true,
        pointsBios : [],
        parcours : [],
        activeTab : 0
    }
    async componentDidMount(){
        const url = 'http://localhost:8000/api/pointBiodiversite/?format=json';
        const parcoursAPI = 'http://localhost:8000/api/parcours/?format=json';

        const response = await fetch(url);
        const responseParcours = await fetch(parcoursAPI);

        const data = await response.json();
        const dataParcours = await responseParcours.json();

        this.state.pointsBios = data;
        this.state.parcours = dataParcours;

        this.setState({loading:false})
    }



    toggleCategories(){

        if(this.state.activeTab === 0){
            return(

                <div><h4>{this.state.parcours[0].nom}</h4>
                    {utile}

                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 1 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        parcours={item.parcours_id}
                        remarquable={item.ecorceRemarquable}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 1){
            return(

                <div><h4>{this.state.parcours[1].nom}</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 2 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        parcours={item.parcours_id}
                        remarquable={item.ecorceRemarquable}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h4>{this.state.parcours[2].nom}</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 3 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        parcours={item.parcours_id}
                        remarquable={item.ecorceRemarquable}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div><h4>{this.state.parcours[3].nom}</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 4 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        parcours={item.parcours_id}
                        remarquable={item.ecorceRemarquable}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 4){
            return(
                <div><h4>{this.state.parcours[4].nom}</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 5 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        parcours={item.parcours_id}
                        remarquable={item.ecorceRemarquable}
                    />) : (null)

                ))}</div>
            )
        }

    }

    render() {
        return(
            <Fragment>
                {this.state.loading ?
                    (<div className='loading'> Loading ..</div>):
                    (
                        <div className="category-tabs">
                            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                                <Tab>{this.state.parcours[0].nom}</Tab>
                                <Tab>{this.state.parcours[1].nom}</Tab>
                                <Tab>{this.state.parcours[2].nom}</Tab>
                                <Tab>{this.state.parcours[3].nom}</Tab>
                                <Tab>{this.state.parcours[4].nom}</Tab>
                            </Tabs>

                            <section className="projects-grid">
                                {this.toggleCategories()}
                            </section>
                        </div>
                    )}


            </Fragment>
        );
    }
}

export default PointsBios;