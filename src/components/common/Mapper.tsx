import React from 'react'
interface ListMapperProps<T>{
    isLoading? : boolean
    data : T[] | undefined, 
    renderItem : (item : T) => React.ReactNode
    isActive?: (item : T) => boolean
    LoadingComponent?: React.ReactNode,
    EmtyListComponent? : React.ReactNode,


}
export const ListMapper = <T,>({data, EmtyListComponent, isLoading, isActive, renderItem, LoadingComponent} : ListMapperProps<T> ) => {
  
    if (isLoading) {
    return LoadingComponent
  }
    if (!data || data.length < 1) {
    return EmtyListComponent
  }
  return (data.map((element, index) =>(
       <div className='w-full'  key={index}>
        {renderItem(element)}
       </div>)))

}


ListMapper.bind(7)