/*flickrGallery.js*/

import "./flickrGallery.css";
// import "../vendor/lightcase.css";
import React from "react";
import ReactDOM from "react-dom";

import GalleryContainer from "./components/gallery-container";

let controller = {

    fetch(params, callback) {

        params.api_key = 'da3169b67ad9f66a8a096a1b86e58bde';
        params.format = 'json';

        // $.ajax({
        // 	url : 'https://api.flickr.com/services/rest?nojsoncallback=1&method=flickr.photosets.getPhotos',
        // 	type : 'GET',
        // 	data : params,
        // 	success(data) {
        // 		if(data.stat != "fail"){
        // 			callback(data);
        // 		}
        // 		else{
        // 			console.error(data.message + ". 请确认您输入的参数。");
        // 		}
        // 	},
        // 	error() {
        // 		console.error("获取Flickr上的图片已超时");
        // 		alert("获取Flickr上的图片已超时");
        // 	}
        // });
        $.ajax({
            url: 'https://api.flickr.com/services/rest?nojsoncallback=1&method=flickr.photosets.getPhotos',
            type: 'GET',
            data: params,
        }).then((data) => {
            if(data.stat != "fail") {
                callback(data);
            } else {
                console.error(`${data.message}. 请确认您输入的参数。`);
            }
        }, () => {
            console.error("获取Flickr上的图片已超时");
            alert("获取Flickr上的图片已超时");
        });
    }
};

controller.fetch({
    photoset_id: '72157655781310921',
    extras: 'url_s',
    per_page: 200,
    page: 1
}, (data) => {
    ReactDOM.render(
        <GalleryContainer  data={data.photoset.photo} />,
        document.getElementById('container')
    );
});
