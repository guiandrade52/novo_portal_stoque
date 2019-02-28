const URL_BASE = 'http://localhost:64966'

const EXTENSIONS = {
    embed: ['jpg', 'jpeg', 'png', 'pdf', 'txt'],
    office: ['doc', 'docx', 'xlsx', 'xls', 'pptx', 'ppt']
}

const VIEWS = {
    microsoft: 'https://view.officeapps.live.com/op/view.aspx?src=',
    google: 'https://docs.google.com/viewerng/viewer?url='
}


export const appConfig = {
    URL_BASE,
    EXTENSIONS,
    VIEWS
}