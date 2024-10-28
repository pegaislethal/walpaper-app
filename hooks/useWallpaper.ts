
export interface Wallpapers{
    url:String;
    name:String;
}

interface FullWallpaper extends Wallpapers{
    liked:boolean,
    suggested:boolean,
    library:boolean

}

export function useSuggestedWallpapers():FullWallpaper[]{
    const wallpapers=useWallpapers();
    return wallpapers.filter(wallpapers=>wallpapers.suggested);
}

export function useLikededWallpapers():FullWallpaper[]{
    const wallpapers=useWallpapers();
    return wallpapers.filter(wallpapers=>wallpapers.liked);
}
export function useLibraryWallpapers():FullWallpaper[]{
    const wallpapers=useWallpapers();
    return wallpapers.filter(wallpapers=>wallpapers.library);
}


export function useWallpapers(): FullWallpaper[]{
    return[
        {
            url:"https://plus.unsplash.com/premium_photo-1680871320511-8be2085ff281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
            name:"Sea",
            liked:false,
            suggested:true,
            library:true

           
        },
        {
            url:"https://images.unsplash.com/photo-1638895086783-992727960f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuc3BhbHNofGVufDB8fDB8fHww",
            name:"Clouds",
            liked:true,
            suggested:true,
            library:true

            
            
        },
        {
            url:"https://images.unsplash.com/photo-1729180253343-12fdbd236c81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
            name:"Hills",
            liked:true,
            suggested:false,
            library:true

           
            
        },
        {
            url:"https://images.unsplash.com/photo-1729008920276-e9e61d13c2db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
            name:"Morning",
            liked:false,
            suggested:false,
            library:true

            
        },
        {
            url:"https://images.unsplash.com/photo-1729432535889-a9c8bd398188?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
            name:"Morning",
            liked:false,
            suggested:false,
            library:true

            
        }

    ]
}