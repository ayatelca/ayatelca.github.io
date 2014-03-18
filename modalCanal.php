            <?php
            $canal=$_GET["canal"];
            $nombre=$_GET["nombre"];
            ?>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <img src="images/canales/<?php echo $canal?>.png" alt="..." class="thumbchanel">

                <h3 class="modal-title canales" >Canal <?php echo "($canal) $nombre";?> <img style="margin-right:0.8em;margin-top:-0.3em;"src="images/atv.png" alt="..." class=" pull-right" height="50px" width="50px"> </h3>


            </div>
            <div class="modal-body">
            <h4 style="display:inline">Programas pendientes</h4>
                 <select style="text-align:center;padding-left:1em;margin-left:1em; margin-bottom:1em;">
                    <option value="0">Hoy</option>
                    <option value="0">Mañana</option>
                </select>
                <table class="table " id="table" >
                    <thead>
                        <tr >
                            <th style="width:20%;">Hora</th>
                            <th colspan="2">Título</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>09:00am</td>
                            <td>Noticias de Venezuela</td>
                            <td><a class="btn btn-default"><i class="glyphicon glyphicon-phone"></i>Recordar  </a></td>
                        </tr>
                        <tr>
                            <td>11:30am</td>
                            <td>Entrevista con el pueblo.</td>
                            <td><a class="btn btn-default"><i class="glyphicon glyphicon-phone"></i>Recordar  </a></td>

                        </tr>
                        <tr>
                            <td>01:30am</td>
                            <td>Noti tarde.</td>
                            <td><a class="btn btn-default"><i class="glyphicon glyphicon-phone"></i>Recordar  </a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
