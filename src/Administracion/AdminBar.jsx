import React from 'react'
import * as BsIcons from "react-icons/bs"

import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"

import * as MdIcons from "react-icons/md"
import * as CgIcons from "react-icons/cg"
import * as GiIcons from "react-icons/gi"

import * as AiIcons from "react-icons/ai"
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import '../styles/TutoradosBar.css'
const AdminBar=(props)=>{
    const {nombrePage}=props;
    const cookie=new Cookies()
    const cerrarSesion=()=>{
        cookie.remove('id',{path:'/'});
        cookie.remove('apellido_paterno',{path:'/'});
        cookie.remove('apellido_materno',{path:'/'});
        cookie.remove('nombre',{path:'/'});
        cookie.remove('correo',{path:'/'});
        cookie.remove('username',{path:'/'});
        cookie.remove('password',{path:'/'});
        
    }
    return(
        <div className="all">
            
            <div className="encabezado ">   
                
                <label className="nombre" for="check">
                    <h5>Bienvenido : {cookie.get('nombre')}</h5>
                </label>
                <label className="lblNombre">{nombrePage}</label>
                <Link className="link" to="/LoginAdministracion" style={{ textDecoration: 'none' }} onClick={()=>cerrarSesion()} for="check">
                 <b>cerrar sesion</b>
                </Link>
            </div>
            <div className="sidebar">
                <div className="cabecera">
                    <img className="carrera" src="../logo.png" alt="" />
                    
                    <h6 className="label">Tutorias</h6>
                    
                </div>
             
                <div className="perfilContenedor">
                    <img className="perfil" src="../imagenes/admin.png" alt="" />      
    
                </div>
                <Link to="/Admin_Menu"  style={{ textDecoration: 'none' }} title="Inicio"><  RiIcons.RiNotification3Fill className="iconobar"/><span>Notificaciones</span></Link>
                <Link to="/Admin_Horarios"  style={{ textDecoration: 'none' }} title="Horarios"><BsIcons.BsTable className="iconobar"/><span>Horarios de tutoria</span></Link>
                <Link to="/Admin_Docentes_Tutores" style={{ textDecoration: 'none' }} title="Tutor Asignado"><GiIcons.GiTeacher className="iconobar"/><span>Docentes tutores</span></Link>
                <Link to="/Admin_Ayudantes" style={{ textDecoration: 'none' }} title="Tutor Asignado"><FaIcons.FaChalkboardTeacher className="iconobar"/><span>Ayudantes de tutoria</span></Link>
                <Link to="/Admin_Estudiantes_Riesgo" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><BsIcons.BsFillPersonDashFill className="iconobar"/><span>Estudiantes en riesgo</span></Link>
                <Link to="/Admin_Consultar_Informes" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><CgIcons.CgPlayListSearch className="iconobar"/><span>Consultar informes</span></Link>
                <Link to="/Admin_Crear_Notificacion" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><MdIcons.MdAddAlert className="iconobar"/><span>Crear Notificacion </span></Link>
                <Link to="/Admin_Hacer_Tutor" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><AiIcons.AiOutlineUserAdd className="iconobar"/><span>Hacer tutor </span></Link>
                <Link to="/Admin_Asignar_Tutor" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><AiIcons.AiOutlineUserSwitch className="iconobar"/><span>Asignar tutor</span></Link>

                <div className="linkEstudiantes">
                      <Link to="/Admin_Estudiantes" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><FaIcons.FaUserFriends className="iconobar"/><span>Estudiantes</span></Link>
                </div>
                <div className="linkDocentes">
                      <Link to="/Admin_Docentes" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><FaIcons.FaUserTie className="iconobar"/><span>Docentes</span></Link>
                </div>
                <div className="linkPerfil">
                      <Link to="/Admin_Perfil" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><BsIcons.BsPersonSquare className="iconobar"/><span>Perfil</span></Link>
                </div>
            </div>    
                  
        </div>
    )
}

export default AdminBar
