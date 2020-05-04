//@flow
import Api from '../services/api';

// postando na API
export function postRequest(host, retornoUnform) {
    return Api.post(`${host}/posts`, retornoUnform);
}

// excluindo um post na API
export function excluirPost(host, postID) {
    return Api.delete(`${host}/posts/${postID}`);
}

// editando Posts
export function editarPost(host, retornUnform, postId) {
    return Api.put(`${host}/posts/${postId}`, retornUnform);
}

// recuperando unico Post
export function postPorId(host, postId) {
    return Api.get(`${host}/posts/${postId}`);
}
