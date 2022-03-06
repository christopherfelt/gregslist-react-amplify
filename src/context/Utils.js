export function performAction(methods, methodName){
    console.log("Methods: ", methods);
    const foundAction = methods.find( method => method.name === methodName)
    foundAction.func();
}