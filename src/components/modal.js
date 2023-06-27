import $ from "jquery";
import "../../node_modules/jquery-confirm/dist/jquery-confirm.min.js";

export default class jQueryConfirm
{
    #modalContent;
    #modal;
    constructor(modalContent = "This is a default message.")
    {
        this.#modalContent = modalContent;
        this.#modal = null;
    }

    createModal()
    {
        let content = this.#modalContent;

        this.#modal = $.confirm({
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

    getModalContent() 
    {
        if(typeof this.#modalContent === "undefined" | "null") this.#modalContent = "";
        return this.#modalContent;
    }
    
    getModal() {return this.#modal;}

    setModalContent(modalContent) {this.#modalContent = modalContent;}

    setModal(modal) 
    {
        this.setModalContent(modal.getModalContent());
        this.#modal = modal;
    }
}