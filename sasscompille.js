import * as sass from 'sass'
$.get('./scss/main.scss').done((data)=>{
    const sass = sass.compileString(data);
    $(document).css(sass)
})