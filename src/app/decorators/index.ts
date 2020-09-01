




export function AppDecorator(config){

    console.log(config.message);


    return function(target){
        console.log('Decorated Class : ',target);

        target.prototype.hello = 'Hello From decorator'

    }
}