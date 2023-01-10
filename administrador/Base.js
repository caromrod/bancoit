class cUsuarios{

    UsuariosId;
    Tipo_cliente;
    TarjetasID;
    cbu;
    alias;


    constructor(_UsuariosId, _Tipo_cliente, _TarjetasID, _cbu, _alias)
    {
        this.UsuariosId = _UsuariosId;
        this.Tipo_cliente =  _Tipo_cliente;
        this.TarjetasID = _TarjetasID;
        this.cbu = _cbu;
        this.alias= _alias;
    }
}

const Usuarios = [
    new cUsuarios(0, 'plata', 1, 20973920, 'caro123'),
    new cUsuarios(1, 'bronce', 2, 20973921, 'caro124'),
    new cUsuarios(2, 'oro', 3, 20973922,  'caro125' ),
    new cUsuarios(3, 'plata', 4, 20973923,  'caro126'),
    new cUsuarios(4, 'oro', 5, 20973924,  'caro127'),
    new cUsuarios(5, 'bronce', 6,  20973925, 'caro128'),
    new cUsuarios(6, 'bronce', 7,  20973926, 'caro129'),
    new cUsuarios(7, 'plata', 8,  20973927, 'caro130'),
    new cUsuarios(8, 'oro', 9,  20973928, 'caro131'),
    new cUsuarios(9, 'oro', 10,  20973929, 'caro132'),
    new cUsuarios(10, 'bronce', 11,  20973930, 'caro133'),
    new cUsuarios(11, 'plata', 12,   20973931, 'caro134')
];

