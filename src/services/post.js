//@flow
import Api from '../services/api';

// postando na API
export function postRequest(retornoUnform) {
    return Api.post('posts', retornoUnform);
}

// excluindo um post na API
export function excluirPost(postID) {
    return Api.delete(`posts/${postID}`);
}

// editando Posts
export function editarPost(retornUnform, postId) {
    return Api.put(`posts/${postId}`, retornUnform);
}

// recuperando unico Post
export function postPorId(postId) {
    return Api.get(`posts/${postId}`);
}
