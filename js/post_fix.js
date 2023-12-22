
window.onload = function () {
    const width = $('.content_container').width() + 'px';
    $('figure.highlight .code pre').css('max-width', width);
    const preElements = document.querySelectorAll('pre');

    for (let i = 0; i < preElements.length; i++) {
        const preElement = preElements[i];
        var hljsElement = preElement.querySelector('code.hljs')
        if (!hljsElement) {
            continue
        }
        const classNames = hljsElement.className.split(' '); // 将类名拆分成数组
        const lastClassName = classNames[classNames.length - 1];
        const divElement = document.createElement('div');
        divElement.className = 'code-block-header';
        divElement.innerHTML = `<span>${lastClassName}</span>`;
        divElement.style.width = width;
        preElement.insertBefore(divElement, preElement.firstChild);
    }
};
