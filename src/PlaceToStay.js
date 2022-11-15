const PlaceToStay = () => {
    return ( 
        
        <div>
            <div class="flex items-center justify-center text-[#434343] md:justify-start md:px-[3rem]">
                <div class="mr-3 md:hidden">
                    <div class="relative inline-block text-left" data-headlessui-state="">
                        <div>
                            <button class="flex w-[161px] justify-between rounded-lg border-2 border-[#B4B4B4] p-2" id="headlessui-menu-button-:r0:" type="button" aria-haspopup="true" aria-expanded="false" data-headlessui-state="">
                                Places
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC" alt="open" class="mr-2 mt-1 w-2 rotate-90 "/>
                            </button>
                        </div>
                    </div>
                </div>
                <div class=" hidden gap-5 md:grid md:grid-cols-4 lg:grid-cols-8">
                    <a href="/placeToStay">
                        Resturant
                    </a>
                    <a href="/placeToStay">
                        Cottage
                    </a>
                    <a href="/placeToStay">
                        Castle
                    </a>
                    <a href="/placeToStay">
                        fantast city
                    </a>
                    <a href="/placeToStay">
                        beach
                    </a>
                    <a href="/placeToStay">
                        Carbins
                    </a>
                    <a href="/placeToStay">
                        Off-grid
                    </a>
                    <a href="/placeToStay">
                        Farm
                    </a>
                </div>
            <button class="flex w-[161px] justify-between rounded-lg border-2 border-[#B4B4B4] p-2 md:ml-[5rem] lg:ml-0">
                Location
                <span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZRtCoAgDEA38T6FHqSO0lG6SieoEwidyDaoqBDb/vXhg5Jimxs+BPgNzrmOH1BipIGI2NDSghLLL+5sLXAixjiEEPrDJpX3fhTU3XPt4Qdeg4wxqUQEAancLNw5TTqBEisN5JHVXT0Sra7qmbW6ZjVNQWdR0zJv33eKZzVNQcU49lpMpLgIra5iTTfeq2u5Tctt+mEWx89eJ96f2IsAAAAASUVORK5CYII="/>
                </span>
            </button>
        </div>
        </div>
     );
}
 
export default PlaceToStay;