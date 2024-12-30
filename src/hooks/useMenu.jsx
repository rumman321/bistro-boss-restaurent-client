import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menus, setMenu] = useState([]);
    const [loading,setLoading]=useState(true)
      useEffect(() => {
        fetch("/menu.json")
          .then((res) => res.json())
          .then((data) => {
            setLoading(false)
            setMenu(data)
          });
      }, []);
    return [menus,loading]
};

export default useMenu;