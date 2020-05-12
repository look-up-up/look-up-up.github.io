(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{318:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[s._v("文件上传")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/python3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" os\nfrom flask "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" Flask, request\nfrom flask_uploads "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" UploadSet, configure_uploads, IMAGES,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n patch_request_class\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# app.config['UPLOADED_PHOTOS_DEST'] = os.getcwd()  # 文件储存地址")]),s._v("\napp.config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'UPLOADED_PHOTOS_DEST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/log/look/watch/tu'")]),s._v("\n\nphotos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" UploadSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'photos'")]),s._v(", IMAGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconfigure_uploads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app, photos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npatch_request_class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件大小限制")]),s._v("\n\nhtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n    <!DOCTYPE html>\n    <title>Upload File</title>\n    <h1>图片上传</h1>\n    <form method=post enctype=multipart/form-data>\n         <input type=file name=photo>\n         <input type=submit value=上传>\n    </form>\n    '")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n\n\n@app.route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndef upload_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" request.method "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'photo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" request.files:\n        filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" photos.save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request.files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'photo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        file_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" photos.url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" html + "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<br><img src='")]),s._v(" + file_url + "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'>'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" html\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    app.run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0.0.0'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("debug")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);