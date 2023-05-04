import React from "react";
import style from "./style";
import {Image, Text, TouchableOpacity} from 'react-native';

export default function Card(filme){
    return(

        <TouchableOpacity style = {style.containerFilmes}>

            <Image style = {style.imagemFilmes} source = {require(`../../img/${filme.imagem}`)} />
            <Text style = {style.tituloFilmes} >{filme.nome}</Text>
            <Text style = {style.notaFilmes} >{filme.nota}</Text>

        </TouchableOpacity>

    );
}