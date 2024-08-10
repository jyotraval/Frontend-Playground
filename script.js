const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const jsEditor = document.getElementById('js-editor');
const livePreview = document.getElementById('live-preview');

function run() {
    const htmlContent = htmlEditor.value;
    const cssContent = `<style>${cssEditor.value}</style>`;
    const jsContent = `<script>${jsEditor.value}<\/script>`;

    const previewContent = htmlContent + cssContent + jsContent;
    livePreview.srcdoc = previewContent;
}

htmlEditor.addEventListener('input', run);
cssEditor.addEventListener('input', run);
jsEditor.addEventListener('input', run);
