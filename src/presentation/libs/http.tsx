class Http {
    static instance: Http = new Http();

    get = async (url: string): Promise<any> => {
        try {
            let req = await fetch(url);
            let json = await req.json();
            
            return json;
        } catch (error) {
            console.log('http get method', error);
            throw new Error(String(error));
        }
    }
    
    post = async (url: string, body: any): Promise<any> => {
        try {
            let req = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body), 
                headers: {
                    'Content-Type': 'application/json' 
                }
            });
            
            let json = await req.json();
            
            return json;
        } catch (error) {
            console.log('http post method', error);
            throw new Error(String(error));
        }
    }
}

export default Http;
