import { Fragment, useState } from 'react'
import { Listbox as HListBox} from '@headlessui/react'

import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

export interface ListBoxItem{
    value: string;
    content: React.ReactNode;
    disabled?: boolean;
}



interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    // extends string затем чтобы TS подхватывал энамы и выводил типы
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
  
    const {
        className,
        items,
        onChange,
        defaultValue,
        value,
        readonly,
        direction='top right',
        label
    } = props;

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    const optionsClasses = [
        mapDirectionClass[direction]
    ];

    return (
        <HStack
            gap='4'
        >
            {label &&  <span>{label}</span>}
            <HListBox 
                disabled={readonly}
                as={'div'} 
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])} 
                value={value} 
                onChange={onChange}
            >
                <HListBox.Button 
                    disabled={readonly}
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                    
                </HListBox.Button>
                <HListBox.Options 
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({active, selected}) => (
                            <li
                                className={classNames(cls.item,  {
                                    [popupCls.active]: active, 
                                    [popupCls.disabled]: item.disabled
                                }, [])}
                            >
                                {selected && '=>' }
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}