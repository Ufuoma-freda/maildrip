const selectors = {

    //Login Screen    
    "google_button": "div[class= 'flex-1 items-center justify-center flex']",
    "email_field":   "input[placeholder = 'Email']",
    "password_field": "input[placeholder = 'Password']",
    "forgot_pwd_button": "a[href = '/forgot-password']",
    "login_button": "button[id = 'btn--type-primary_xl']",
    "sign_up_button": "a[href='/signup']",


    //Dashboard
    "product_tutor_close_button": 'button[data-uf-button="button"]',

    //Side Navigation Bar
    "drip_campaigns": "div[product-tutor-id='sidebar-campaigns']",

    //Campaign
    "search_field": 'input[placeholder="Search Campaigns"]',
    "create_campaign_button": 'button[id="btn--type-primary_lg"]',
    "campaign_toggle_switch": 'span[class="ant-switch-inner"]', //Specify the index of the particular button
    "delete_campaign_button": 'img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgBtVTRTcNADPVditQPEGGCHlFVxB/dADboCGxQOgGMwAZ0A9QJgAlov0Ag0mOCXgV8UCU2dpOUpO1BP8BSlDuf9e752T6APzLlO3gwxmitT8s+ROwfWmvXxdc8OLCl9Q0BDPkml7tCrdQ1/9uwKaOxMWGi9eQdca9trfP5VoAkDWZwzgxCIDKkVMgHZinQyTl/VhHZuU8p+4bYE+B5anUOmgG8aoAREQ2KQD60BVCSA8vNDGaU1mHKwHW5/Dv9zO6ZPmxgEidZlH26vNkJgqvHKDr7DWibq8nCX3qBUsSpyqj+aMgxgVKTsq9SfhZPcp0DPTebx9w4XRZ/Acz69VrWSkuEDDb1ArGILgBoyDpJEsvrQYVxLioJOFfMC8R5upToSNZ5B/dhjXFcg0GHfkaIjkXcLfYvUdRFoo6sUam7gzi+WIBlMngYBYGThiz2M8RRUGhB5EogIaap9TNKU8eNtthzerewxqQRl2erUn7uXksblF/G53Opm1eG9imKxqo69RWjbBZNK473y/6VZ4Sb8qSmdSf1MGN9Rh/8LsF/2RfX7LAEGBCa2wAAAABJRU5ErkJggg=="]',
    

}

module.exports = selectors;