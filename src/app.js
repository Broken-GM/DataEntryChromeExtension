import { copyClipboard } from './helpers/general.js'

const app = () => {
    const url = document.URL;
    const itemName = $( ".page-title" ).text();

    copyClipboard(`${itemName},${url}`)
}

export default app