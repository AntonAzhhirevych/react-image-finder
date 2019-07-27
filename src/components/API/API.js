import axios from 'axios';

export default function UseAPI(search, page = '1') {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=13143868-6e4823e3adb94cfaaa0816102`,
  );
}
