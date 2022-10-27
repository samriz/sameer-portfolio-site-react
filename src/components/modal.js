import $ from "jquery";
import "../../node_modules/jquery-confirm/dist/jquery-confirm.min.js";

export default function jqueryConfirm(modalContent)
{
    let content;

    if(typeof modalContent === "string") content = modalContent;
    else content = "This is a default message.";

    return $.confirm({
        lazyOpen: true,
        autoClose: false,
        title: "",
        content: content,
        buttons:
        {
            OK:
            {
                keys: ["enter"]
            }
        }
    });
}