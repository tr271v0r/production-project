import { PluginItem } from "@babel/core";

export default function(): PluginItem {
    return {
      visitor: {
        Program(path, state) {
            const frobidden = state.opts.props || [];
            path.traverse({
                JSXIdentifier(current){
                    const nodeName = current.node.name;
                    if(frobidden.includes(nodeName)){
                        current.parentPath.remove();
                    }
                }
            })
        }
      },
    };
} 