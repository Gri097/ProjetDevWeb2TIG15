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
        pointsBios : [],
        familles : [],
        parcours : [],
        activeTab : 0
    }
    async componentDidMount(){
        const url = 'http://localhost:8000/api/pointBiodiversite/?format=json';
        const famillesAPI = 'http://localhost:8000/api/famille/?format=json';
        const parcoursAPI = 'http://localhost:8000/api/parcours/?format=json';
        const response = await fetch(url);
        const responseFamille = await fetch(famillesAPI);
        const responseParcours = await fetch(parcoursAPI);

        const data = await response.json();
        const dataFamille = await responseFamille.json();
        const dataParcours = await responseParcours.json();

        this.state.pointsBios = data;
        this.state.familles = dataFamille;
        this.state.parcours = dataParcours;
    }



    toggleCategories(){
        this.componentDidMount();

        if(this.state.activeTab === 0){
            return(

                <div><h4>Parcours des Sciences</h4>
                    {utile}

                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 1 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        famille={item.famille_id}
                        parcours={item.parcours_id}
                        numParcours={item.numeroParcours}
                        remarquable={item.ecorceRemarquable}
                        allFamilles={this.state.familles}
                        allParcours={this.state.parcours}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 1){
            return(

                <div><h4>Parcours du Cyclotron</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 2 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        famille={item.famille_id}
                        parcours={item.parcours_id}
                        numParcours={item.numeroParcours}
                        remarquable={item.ecorceRemarquable}
                        allFamilles={this.state.familles}
                        allParcours={this.state.parcours}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h4>Parcours du Lac</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 3 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        famille={item.famille_id}
                        parcours={item.parcours_id}
                        numParcours={item.numeroParcours}
                        remarquable={item.ecorceRemarquable}
                        allFamilles={this.state.familles}
                        allParcours={this.state.parcours}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div><h4>Parcours du Jardin Botanique</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 4 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        famille={item.famille_id}
                        parcours={item.parcours_id}
                        numParcours={item.numeroParcours}
                        remarquable={item.ecorceRemarquable}
                        allFamilles={this.state.familles}
                        allParcours={this.state.parcours}
                    />) : (null)

                ))}</div>
            )
        }else if(this.state.activeTab === 4){
            return(
                <div><h4>Parcours du Parc Moulinsart</h4>
                    {utile}
                    {this.state.pointsBios.map(item => (
                    item.parcours_id === 5 ?(<PointBio
                        id={item.id}
                        key={item.id}
                        nomFranc={item.nomFr}
                        nomScien={item.nomSc}
                        famille={item.famille_id}
                        parcours={item.parcours_id}
                        numParcours={item.numeroParcours}
                        remarquable={item.ecorceRemarquable}
                        allFamilles={this.state.familles}
                        allParcours={this.state.parcours}
                    />) : (null)

                ))}</div>
            )
        }

    }

    render() {
        return(
            <Fragment>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                        <Tab>Parcours Des Sciences</Tab>
                        <Tab>Parcours Du Cyclotron</Tab>
                        <Tab>Parcours Du Lac</Tab>
                        <Tab>Parcours Du Jardin Botanique</Tab>
                        <Tab>Parcours Du Parc Moulinsart</Tab>
                    </Tabs>

                    <section className="projects-grid">
                        {this.toggleCategories()}

                    </section>


                </div>

            </Fragment>
        );
    }
}

export default PointsBios;
/*
                        <Tab style={{color:'#DAA520'}}>Parcours Des Sciences</Tab>
                        <Tab style={{color:'#8B0000'}}>Parcours Du Cyclotron</Tab>
                        <Tab style={{color:'#87CEFA'}}>Parcours Du Lac</Tab>
                        <Tab style={{color:'#556B2F'}}>Parcours Du Jardin Botanique</Tab>
                        <Tab style={{color:'#663399'}}>Parcours Du Parc Moulinsart</Tab>
 */