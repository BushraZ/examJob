    import _ from 'lodash';
    
    export const fetchItem = (id, list) => {
      const array = [list];
    //console.log('fetchitem=',id,list)
      return _.find(array[0].data, (element) => element.id === id);
    };

    export const findMatches =(list,desc,loc)=> {
     
      return list.filter(element => {
        
        const regexDesc = new RegExp(desc, 'gi');
        const regexLoc = new RegExp(loc,'gi');

        if(desc && loc )
        return element.description.match(regexDesc) && element.location.match(regexLoc);

        if(desc)
        return element.description.match(regexDesc);

        if(loc)
        return element.location.match(regexLoc);
      });
    }